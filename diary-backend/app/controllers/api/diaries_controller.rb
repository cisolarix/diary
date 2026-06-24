module Api
  class DiariesController < ApplicationController
    include Authentication

    def index
      @diaries = Diary.active_by_user_since(current_user, params[:since])
      render "api/diaries/index"
    end

    def show
      @diary = Diary.kept.find_by!(user: current_user, diary_date: params[:date])
      render "api/diaries/show"
    end

    def upsert
      @diary = Diary.kept.find_or_initialize_by(
        user: current_user,
        diary_date: params[:date]
      )

      @diary.assign_attributes(
        content: params[:content] || "",
        location: params[:location],
        latitude: params[:latitude],
        longitude: params[:longitude]
      )

      @diary.save!
      render "api/diaries/show"
    end

    def destroy
      @diary = Diary.kept.find_by!(user: current_user, diary_date: params[:date])
      @diary.discard!
      head :no_content
    end
  end
end
